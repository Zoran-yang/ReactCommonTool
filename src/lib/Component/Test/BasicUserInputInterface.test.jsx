import { render } from "@testing-library/react";
import BasicUserInputInterface from "../BasicUserInputInterface";

let id = "10",
  tasktype = { title: "test" }, //After transform by taskInfoFormat
  taskname = { title: "寫程式" }, //After transform by taskInfoFormat
  tasktag = [{ title: "React" }, { title: "Doing" }], //After transform by taskInfoFormat
  // after transform by translateRichEditor
  sop =
    '{"blocks":[{"key":"cn15","text":"https://www.evernote.com/shard/s608/sh/1516c774-9391-1209-4ac9-c356c93f7435/gSVCLsG0ctONe3tBXrJEpExl4tozCaI4SxV2JLF0mhYZhWSjKYMfFcfeoQ","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}',
  created_at = "2023-04-14T01:57:47.013Z",
  sopid = "cc1e4f1a-fe5a-4324-bb99-f730c556b03e";

let mockResponse = [
  {
    id: "193",
    tasktype: '{"title":"test"}',
    created_at: "2023-04-21T05:12:46.150Z",
  },
];

test("BlankInput", () => {
  const wrapper = render(
    <BasicUserInputInterface
      title="test"
      dataSource={mockResponse}
      defaultValues={null}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
