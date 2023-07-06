import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})


import { cache } from "react"

// other imports and createClient

// Add cachedClient export
export const cachedClient = cache(client.fetch.bind(client))