const SectionTitle = ({ title, intro }) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-3xl font-PlayFair font-bold border-b border-blue-400 w-fit mx-auto pb-5">
        {title}
      </h2>
      <p className="leading-8">{intro}</p>
    </div>
  );
};
export default SectionTitle;
