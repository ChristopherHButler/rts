

interface ChildProps {
  color: string;
  onClick: () => void;
}

// export const Child = (props: ChildProps) => {
//   return <div>Hi There</div>;
// };

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}></button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}></button>
    </div>
  );
};

// long form of writing FC
// export const ChildAsFC: React.FunctionComponent<ChildProps> = ({ color }) => {
//   return <div>{color}</div>;
// };

// ChildAsFC.displayName