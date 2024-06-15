import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/slices/userSlice";
import {
  CircularImage,
  EditButton,
  Form,
  Input,
  ProfileEditContainer,
  ProfileImageButton,
  Select
} from "./ProfileEdit.styled";

const ProfileEdit = () => {
  const [username, setUsername] = useState("");
  const [track, setTrack] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);
  const fileInputRef = useRef(null);
  const defaultProfileImage = "/default_profile.png";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session }
      } = await supabase.auth.getSession();
      if (session?.user) {
        const { data: userData, error } = await supabase.from("users").select("*").eq("id", session.user.id).single();
        if (error) {
          console.error("Error fetching user data:", error.message);
          setNotification("An error occurred while fetching user data.");
        } else {
          setUser(userData);
          setUsername(userData.username);
          setTrack(userData.track);
          if (userData.image) {
            setImagePreview(userData.image);
          }
        }
      }
    };
    fetchUser();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (newPassword && newPassword !== checkPassword) {
        alert("비밀번호가 일치하기 않습니다.");
        return;
      }
      if (newPassword.length < 6) {
        alert("비밀번호는 6글자 이상이어야 합니다.");
        return;
      }

      let profileImageUrl = user?.avatars || "";
      if (image) {
        const { data: imageData, error: imageError } = await supabase.storage
          .from("avatars")
          .upload(`${user.id}/${crypto.randomUUID()}.jpg`, image, {
            upsert: true
          });
        if (imageError) {
          throw imageError;
        }
        const { data: publicURLData, error: publicURLError } = supabase.storage
          .from("avatars")
          .getPublicUrl(imageData.path);
        if (publicURLError) {
          throw publicURLError;
        }
        profileImageUrl = publicURLData.publicUrl;
      }
      const updatedData = {
        username: username || user.username,
        track: track || user.track,
        image: profileImageUrl || user.image
      };
      const { error } = await supabase.from("users").update(updatedData).eq("id", user.id);
      if (error) {
        throw error;
      }
      if (newPassword) {
        const { error: passwordError } = await supabase.auth.updateUser({ password: newPassword });
        if (passwordError) {
          throw passwordError;
        }
      }

      dispatch(updateProfile(updatedData));

      alert("프로필이 성공적으로 업데이트되었습니다.");
      navigate("/mypage");
    } catch (error) {
      console.error("프로필업데이트 에러:", error.message);
      setNotification("프로필 업데이트 중 오류가 발생했습니다.");
    }
  };

  return (
    <ProfileEditContainer>
      {notification && <div>{notification}</div>}
      {imagePreview ? (
        <CircularImage src={imagePreview} alt="Preview" />
      ) : (
        <CircularImage src={defaultProfileImage} alt="Default" />
      )}
      <ProfileImageButton onClick={handleButtonClick}>프로필 사진 변경</ProfileImageButton>
      <input type="file" accept="image/*" ref={fileInputRef} style={{ display: "none" }} onChange={handleImageChange} />
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input
          type="password"
          placeholder="새로운 암호를 입력해주세요"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="새로운 암호를 확인해주세요"
          value={checkPassword}
          onChange={(e) => setCheckPassword(e.target.value)}
        />
        <Select value={track} onChange={(e) => setTrack(e.target.value)}>
          <option value="">Your track</option>
          <option value="React">React</option>
          <option value="ux/ui">ux/ui</option>
          <option value="spring">spring</option>
          <option value="game">game</option>
          <option value="ios">ios</option>
        </Select>
        <EditButton type="submit">수 정</EditButton>
      </Form>
    </ProfileEditContainer>
  );
};

export default ProfileEdit;
