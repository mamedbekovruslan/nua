import { useParams } from "react-router";

export const ConstructorProgramm = () => {
  const { programmId } = useParams();

  return <div>Программа {programmId}</div>;
};
