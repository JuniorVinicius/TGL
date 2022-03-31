import Footer from "../components/Footer";
import Header from "../components/Header";
import {
  AdminLabel,
  BoxImage,
  BoxInfo,
  BoxName,
  BoxProfile,
  Image,
  UserName,
  Email,
} from "../components/Profile";
import { MainConteiner } from "./../UI/Conteiner/MainConteiner";

import { FiEdit } from "react-icons/fi";
import FormUpdateUser from './../components/Form/UpdateUser/index';

const Profile = () => {
  const randomAvatar =
    "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";
  return (
    <>
      <Header hasAccountButton={true} homeButton={true} />
      <MainConteiner>
        <BoxProfile>
          <BoxImage>
            <Image src={randomAvatar} alt="" />
          </BoxImage>

          <BoxInfo>
            <BoxName>
              <UserName>Nome do usuário</UserName>
              <AdminLabel>Admin</AdminLabel>
            </BoxName>
            <Email>Email: mockEMail@email.com</Email>
          </BoxInfo>
          <FiEdit
            style={{
              marginLeft: "10px",
              cursor: "pointer",
              color: "var(--text)",
            }}
            size={25}
          />
        </BoxProfile>

        <FormUpdateUser/>


      </MainConteiner>
      <Footer />
    </>
  );
};
export default Profile;
