import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postType, slug, id } = req.query
  res.setPreviewData({})
  if (slug) {
    res.redirect(`/${postType !== 'post' ? postType : ''}/${slug}`)
    return
  }

  res.redirect(`/${postType !== 'post' ? postType : ''}/${id}`)
}