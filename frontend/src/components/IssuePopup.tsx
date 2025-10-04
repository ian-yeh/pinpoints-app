interface IssueProps {
  title: string;
  summary: string;
}

const IssuePopup = ({ title, summary }: IssueProps ) => {
  return (
    <div>

      <div className="p-2">
        <h3 className="font-bold">{title}</h3>
        <p className="text-sm mt-1">{summary}</p>
      </div>
    </div>
  )
}

export default IssuePopup;
