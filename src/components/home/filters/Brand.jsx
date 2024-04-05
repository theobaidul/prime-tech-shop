export default function Brand() {
  return (
    <div className="w-full space-y-4 rounded-md bg-white p-3 shadow-md">
      <h1 className="bg-gray-200 px-3 py-2 font-bold">Brand</h1>
      <ul className="space-y-3">
        <li className="flex flex-row items-center gap-2">
          <input type="checkbox" name="rating[Apple]" id="rating[Apple]" />
          <label htmlFor="rating[Apple]">Apple</label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input type="checkbox" name="rating[Samsung]" id="rating[Samsung]" />
          <label htmlFor="rating[Samsung]">Samsung</label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input type="checkbox" name="rating[Huawei]" id="rating[Huawei]" />
          <label htmlFor="rating[Huawei]">Huawei</label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input type="checkbox" name="rating[Oppo]" id="rating[Oppo]" />
          <label htmlFor="rating[Oppo]">Oppo</label>
        </li>
        <li className="flex flex-row items-center gap-2">
          <input
            type="checkbox"
            name="rating[MircrosoftSurface]"
            id="rating[MircrosoftSurface]"
          />
          <label htmlFor="rating[MircrosoftSurface]">Mircrosoft Surface</label>
        </li>
      </ul>
    </div>
  );
}
