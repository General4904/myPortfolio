const SkillSet = ({ stack, tools }) => {
  return (
    <>
      <div>
        <h3 className="frontend text-2xl">{stack}</h3>
        <ul>
          {tools.map((tool, index) => (
            <li key={index} className="font-extralight text-md">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SkillSet;
