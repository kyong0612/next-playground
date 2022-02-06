/* eslint-disable */
// prettier-ignore
export const pagesPath = {
  sample: {
    $url: (url?: { hash?: string }) => ({ pathname: '/sample' as const, hash: url?.hash })
  },
  timer: {
    $url: (url?: { hash?: string }) => ({ pathname: '/timer' as const, hash: url?.hash })
  },
  web_cam: {
    $url: (url?: { hash?: string }) => ({ pathname: '/web-cam' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

// prettier-ignore
export type PagesPath = typeof pagesPath
