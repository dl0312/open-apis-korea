import React, { ReactElement, useState } from 'react'

import { Avatar, List, Skeleton, Tag, Empty } from 'antd'
import { Api, AuthType } from 'interfaces/apis/publicApis'
import styled from 'styled-components'

import { CorsType } from '../interfaces/apis/publicApis'

const Description = styled.div`
  margin-bottom: 0.5rem;
`

const Link = styled.a`
  width: 100%;
`

interface Props {
  apis: Api[]
  loading: boolean
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function ApiList({ apis, loading }: Props): ReactElement {
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(20)
  return (
    <List
      style={{ margin: '1rem 0' }}
      itemLayout="horizontal"
      dataSource={apis}
      pagination={{
        size: 'small',
        onChange: (nextPage, nextPageSize) => {
          setPage(nextPage)
          setPageSize(nextPageSize)
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        },
        current: page,
        pageSize,
        responsive: true,
      }}
      locale={{ emptyText: <Empty description={false} /> }}
      renderItem={({
        API: api,
        Auth: auth,
        Category: category,
        Cors: cors,
        Description: description,
        HTTPS: https,
        Link: link,
      }) => (
        <List.Item>
          <Skeleton avatar title={false} loading={loading} active>
            <Link href={link} target="_blank">
              <List.Item.Meta
                avatar={<Avatar src={`https://www.google.com/s2/favicons?sz=64&domain_url=${link}`} />}
                title={api}
                description={
                  <>
                    <Description>{description}</Description>
                    <Tag>{category}</Tag>
                    {auth === AuthType.API_KEY && <Tag color="cyan">API Key</Tag>}
                    {auth === AuthType.OAUTH && <Tag color="orange">OAuth</Tag>}
                    {https && <Tag color="green">HTTPS</Tag>}
                    {cors === CorsType.YES && <Tag color="volcano">CORS</Tag>}
                  </>
                }
              />
            </Link>
          </Skeleton>
        </List.Item>
      )}
    />
  )
}

export default ApiList
