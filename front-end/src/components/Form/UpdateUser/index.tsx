import ActionButtons from "../../../UI/Button/ActionButtons";
import {
  BoxForm,
  TitleForm,
  Form,
  BoxInput,
  Label,
  InputConteiner,
  Input
} from "./style";

const FormUpdateUser = () => {
  return (
    <>
      <BoxForm>
        <TitleForm>Update User</TitleForm>
        <Form>
          <BoxInput>
            <Label htmlFor="name" >Name</Label>
            <InputConteiner>
                <Input id="name" type="text" placeholder="Name"/>
            </InputConteiner>
          </BoxInput>
          <BoxInput>
            <Label htmlFor="email">Email</Label>
            <InputConteiner>
                <Input id="email" type="text" placeholder="Name"/>
            </InputConteiner>
          </BoxInput>

          <ActionButtons name="Update" submit={true} onHandleClick={()=>{}}/>
        </Form>
      </BoxForm>
    </>
  );
};

export default FormUpdateUser;
