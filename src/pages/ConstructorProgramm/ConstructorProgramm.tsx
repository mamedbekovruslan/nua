import { useParams } from "react-router";

export const ConstructorProgramm = () => {
  const { programmId } = useParams();

  return <div className={`container`}>Программа {programmId}</div>;
};
