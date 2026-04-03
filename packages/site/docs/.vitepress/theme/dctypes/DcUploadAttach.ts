declare namespace DcUploadAttach {
  interface FileAttach {
    id?: string;
    fileRealName?: string;
    fileName?: string;
    filePath?: string;
    fileSize?: number;
    fileType?: string;
    response?: any;
    url?: string;
  }

  interface FileResponse {
    isFolder: boolean;
    path: string;
    name: string;
    fullName: string;
    size: number;
    mD5: string;
    creationDate: string;
    lastModifiedDate: string;
    metadata: { Id: string; DisplayName: string };
  }

  interface UploadFileResponse {
    name: string;
    percentage: number;
    status: string;
    size: number;
    raw: { uid: number; fileName: string };
    uid: number;
    response: {
      isFolder: boolean;
      path: string;
      name: string;
      size: number;
      creationDate: string;
      lastModifiedDate: string;
      fullName: string;
      metadata: { Id: string; DisplayName: string };
    };
  }

  interface PreviewFIleItem {
    fileRealName: string;
    fileName: string;
    filePath: string;
    fileSize: number;
    fileType: string;
    name: string;
    url: string;
    uid: number;
    status: string;
  }
}
