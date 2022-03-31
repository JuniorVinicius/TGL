import styled from "styled-components";

export const BoxProfile = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-top: 30px;
  display: flex;
  align-items: center;
`;

export const BoxImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid var(--border);
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
`;

export const BoxName = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserName = styled.h3`
  margin-right: 20px;
  font-size: 30px;
`;

export const AdminLabel = styled.span`
  background: var(--main-green);
  padding: 5px 20px;
  border-radius: 20px;
  color: #fff;
`;

export const Email = styled.p`
  font-size: 25px;
`;
