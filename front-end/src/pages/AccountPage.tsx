import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";

import Footer from "../components/Footer";
import Header from "../components/Header";
import FormUpdateUser from "./../components/Form/UpdateUser/index";
import AdmPanel from "./../components/AdmPanel/index";
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

import userData from "../shared/services/user/myAccount";
import { useSelector } from "react-redux";

interface showUpdateFields{
  showUpdateFields: boolean
}
interface IState{
  showUpdate: showUpdateFields
}

const Profile = () => {
  const [showEditFields, setShowEditFields] = useState(false);
  const [userAccountData, setUserAccountData] = useState<any>();
  const { accountUser } = userData();
  const randomAvatar =
    "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

  const handleClick = () => {
    setShowEditFields(prevState => !prevState);
  };
  const showFields = useSelector((state: IState) => state.showUpdate.showUpdateFields);
  const getUserData = async () => {
    try {
      const responseAccountData = await toast.promise(accountUser(), {
        pending: "loading...",
        error: "Error loading games.",
      });
      setUserAccountData(responseAccountData?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
      setShowEditFields(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[showFields])

  return (
    <>
      <Header hasAccountButton={true} homeButton={true} />
      <MainConteiner>
        <BoxProfile>
          <BoxImage>
            {!userAccountData?.picture && <Image src={randomAvatar} alt="" />}
          </BoxImage>

          <BoxInfo>
            <BoxName>
              <div>
                <UserName>{userAccountData?.name}</UserName>
                <FiEdit
                  className="edit-icon-responsive"
                  onClick={handleClick}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "var(--text)",
                  }}
                  size={25}
                />
              </div>
              <div>
                {userAccountData?.is_admin === 1 && (
                  <AdminLabel>Admin</AdminLabel>
                )}
                <FiEdit
                  className="edit-icon-normal"
                  onClick={handleClick}
                  style={{
                    marginLeft: "10px",
                    cursor: "pointer",
                    color: "var(--text)",
                  }}
                  size={25}
                />
              </div>
            </BoxName>
            <Email>{userAccountData?.email}</Email>
          </BoxInfo>
        </BoxProfile>
        {userAccountData?.is_admin === 1 && <AdmPanel show={!showEditFields} />}

        {showEditFields  && <FormUpdateUser />}
      </MainConteiner>
      <Footer />
    </>
  );
};
export default Profile;
