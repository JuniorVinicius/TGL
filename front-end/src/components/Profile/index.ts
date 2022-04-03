import styled from "styled-components";

export const BoxProfile = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-top: 30px;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 0%;
  }
`;

export const BoxImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--border);
  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

export const BoxInfo = styled.div`
  margin-left: 30px;
  color: var(--text);
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

export const BoxName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  >div{
    display: flex;
    align-items: center;
  }
  & > div > .edit-icon-responsive {
    display: none;
  }
  
  @media (max-width: 728px) {
    flex-direction: column;
    & > div > .edit-icon-responsive {
      display: block;
    }
    & > div > .edit-icon-normal {
      display: none;
    }
  }
`;

export const UserName = styled.h3`
  margin-right: 20px;
  font-size: 30px;
  @media (max-width: 768px) {
    margin-right: 0px;
  }
  @media (max-width: 525px) {
    font-size: 20px;
  }
`;

export const AdminLabel = styled.span`
  background: var(--main-green);
  padding: 5px 20px;
  border-radius: 20px;
  color: #fff;
  @media (max-width: 525px) {
    font-size: 12px;
  }
`;

export const Email = styled.p`
  font-size: 25px;
  @media (max-width: 525px) {
    font-size: 18px;

  }
`;
