import React, { ReactElement } from 'react'

import { Avatar, List, Skeleton, Tag, Empty } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'
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
  pagination: PaginationProps
  onChangePagination: (page: number, pageSize?: number) => void
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function ApiList({ apis, loading, pagination: { current, pageSize }, onChangePagination }: Props): ReactElement {
  return (
    <List
      style={{ margin: '1rem 0' }}
      itemLayout="horizontal"
      dataSource={apis}
      pagination={{
        size: 'small',
        onChange: onChangePagination,
        current,
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
