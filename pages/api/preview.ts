import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postType, id } = req.query
  res.setPreviewData({})
  res.redirect(`/${postType !== 'post' ? postType : ''}/${id}`)
}
