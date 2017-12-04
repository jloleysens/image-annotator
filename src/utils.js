import axios from 'axios';

export const exportImage = state => {
  // eslint-disable-next-line
  const j$ = $;

  const canvasElm = j$('#canvas');
  canvasElm.annotate('export');
  return {
    ...state,
    uploading: true,
    uploadError: null,
  };
};

/*
 * NB, because of CORS restrictions toDataURL (used in the modified
 * djaodjin-annotate lib) will probably throw an exception in Chrome (and
 * probably other browsers that observe this restriction.
 *
 * To get around this the file must either be downloaded server side as part
 * of serving this web app or we need to make sure we are using files that
 * don't have CORS restrictions on them
 */
export async function uploadImage(data) {
  try {
    throw Error('TODO: Image posting nowhere, fix that :)');
    // const result = axios.post('somewhere.interesting.com/postImage');
    // return {result};
  } catch (err) {
    return {err};
  }
}
