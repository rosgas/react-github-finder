function RepoItem({ repo }) {
  return (
    <>
      <div className="p-4 mb-3 rounded-sm shadow-lg bg-gradient-to-r from-slate-200/10">
        {repo.name}
      </div>
    </>
  );
}

export default RepoItem;
