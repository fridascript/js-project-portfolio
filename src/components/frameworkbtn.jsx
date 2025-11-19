export const FrameWork = ({ frameworks }) => {
  if (!frameworks) return null;

  const fwArray = Array.isArray(frameworks) ? frameworks : [frameworks];

  return (
    <div className="framework-container">
      {fwArray.map((fw, index) => (
        <div key={index} className="framework-box">{fw}</div>
      ))}
    </div>
  );
};




