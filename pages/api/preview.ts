import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postType, slug } = req.query
  res.setPreviewData({})
  res.redirect(`/${postType !== 'post' ? postType : ''}/${slug}`)
}