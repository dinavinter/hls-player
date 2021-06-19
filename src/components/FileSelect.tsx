import React, {CSSProperties, FC, useEffect, useMemo, useState} from 'react';
import {Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {RcFile} from "antd/es/upload";

const baseStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle: CSSProperties = {
  borderColor: '#2196f3'
};

const acceptStyle: CSSProperties = {
  borderColor: '#00e676'
};

const rejectStyle: CSSProperties = {
  borderColor: '#ff1744'
};


function FileUpload() {
  const [file, setFile] = useState<RcFile>(undefined)
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  function handleChange({file: RcFile}) {
    setFile(file);
  }

  return (<div>

    <Upload
            style={baseStyle}
            name={'file'}
             onChange={handleChange}
            className="upload-list-inline"
            showUploadList={false}
    >

      {uploadButton}
    </Upload>
  </div>);

}
export default FileUpload;
// export default <StageFiles url={`http://localhost:10102/db/files/new/blob`}  name={"file"}/>;
