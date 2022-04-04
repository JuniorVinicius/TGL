import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FiEdit } from "react-icons/fi";

import {
  Footer,
  Header,
  FormUpdateUser,
  AdmPanel,
  AdminLabel,
  BoxImage,
  BoxInfo,
  BoxName,
  BoxProfile,
  Image,
  UserName,
  Email,
} from "../components";

import { MainConteiner } from "./../UI";
import { userData } from "../shared/services";

interface showUpdateFields {
  showUpdateFields: boolean;
}
interface IState {
  showUpdate: showUpdateFields;
}

const Profile = () => {
  const [showEditFields, setShowEditFields] = useState(false);
  const [userAccountData, setUserAccountData] = useState<any>();
  const { accountUser } = userData();
  const randomAvatar =
    "https://images.unsplash.com/photo-1609743522653-52354461eb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80";

  const handleClick = () => {
    setShowEditFields((prevState) => !prevState);
  };
  const showFields = useSelector(
    (state: IState) => state.showUpdate.showUpdateFields
  );
  const getUserData = async () => {
    try {
      const responseAccountData = await toast.promise(accountUser(), {
        pending: "Carregando...",
        error: "Erro ao carregar os jogos.",
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
  }, [showFields]);

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

        {showEditFields && <FormUpdateUser name={userAccountData?.name} email={userAccountData?.email}/>}
      </MainConteiner>
      <Footer />
    </>
  );
};
export default Profile;
