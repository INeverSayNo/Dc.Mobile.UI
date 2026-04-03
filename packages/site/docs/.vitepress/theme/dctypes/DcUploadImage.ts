declare namespace DcUploadImage {
  interface EmitData {
    uid: number;
    url: string;
    name: string;
    fullname: string;
    path: string;
    size: number;
    type: string;
    date: string;
    FileRealName: string;
    FileName: string;
    FilePath: string;
    FileSize: number;
    FileType: string;
    CreationDate: string;
  }
  interface UploadFileResponse {
    name: string;
    percentage: number;
    status: string;
    size: number;
    raw: { uid: number };
    uid: number;
    url: string;
    response: {
      isFolder: boolean;
      path: string;
      name: string;
      fullName: string;
      size: number;
      mD5: string;
      creationDate: string;
      lastModifiedDate: string;
      metadata: { Id: string; DisplayName: string };
    };
  }
  interface RemoveFileItem {
    url: string;
    path: string;
    name: string;
    uid: number;
    status: string;
  }
}
