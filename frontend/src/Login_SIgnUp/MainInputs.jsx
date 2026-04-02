import { Form } from "react-router-dom";

function MainInputs({ children, path , action=''}) {
  return (
    <Form className="flex-col-start w-full gap-3" method="post" path={path} action={action?action:null}>
      {children}
    </Form>
  );
}

export default MainInputs;
