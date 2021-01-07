/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

// eslint-disable-next-line import/no-extraneous-dependencies
import { SearchOutlined } from '@ant-design/icons'
import { faDice, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Input, Select } from 'antd'
import { PaginationProps } from 'antd/lib/pagination'
import ApiList from 'components/ApiList'
import Footer from 'components/Footer'
import Layout from 'components/Layout'
import RadioGroup from 'components/RadioGroup'
import ThemeToggleSwitch from 'components/ThemeToggleSwitch'
import { Api, AuthType, CategoryType, CorsType } from 'interfaces/apis/publicApis'
import { description, applicationName } from 'public/config'
import styled from 'styles/themed-components'
import publicApis from 'utils/apis/publicApis'

const { Option } = Select

const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0px;

  width: 100%;
  padding-top: 1.5rem;

  background: ${({ theme: { mainBackground } }) => mainBackground};
`

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 0.5rem;
`

const Title = styled.h1``

const Description = styled.p`
  line-height: 1.5;
  margin-right: 0.5rem;
`

const Main = styled.main`
  width: 100%;
`

const Filter = styled.div<{ open: boolean }>`
  border-top: 0.5px solid ${({ theme: { border } }) => border};
  border-left: 0.5px solid ${({ theme: { border } }) => border};
  border-right: 0.5px solid ${({ theme: { border } }) => border};

  overflow-y: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  max-height: ${({ open }) => (open ? '400px' : '0px')};
  transition: 0.75s ease-in-out;
`

const FilterItemContainer = styled.div`
  display: flex;
  height: 2.5rem;

  border-bottom: 0.5px solid ${({ theme: { border } }) => border};
`

const FilterItemTitle = styled.div`
  background: ${({
    theme: {
      inverse: { mainBackground },
    },
  }) => mainBackground};
  color: ${({
    theme: {
      inverse: { title },
    },
  }) => title};

  font-size: 0.8rem;
  font-weight: bolder;
  min-width: 6rem;
  display: flex;
  align-items: center;
  padding: 0.2rem 0 0.2rem 0.6rem;
`

const FilterItemInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
`

const HeaderTopLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const HeaderBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`

const ActionContainer = styled.div`
  display: flex;
`

const FilterToggleButton = styled.button``

const DEFAULT_PAGINATION: PaginationProps = { current: 1, pageSize: 20 }

function Home() {
  /** fetch loading */
  const [randomLoading, setRandomLoading] = useState(false)
  const [searchLoading, setSearchLoading] = useState(false)

  const [filterOpen, setFilterOpen] = useState(true)

  const [pagination, setPagination] = useState<PaginationProps>(DEFAULT_PAGINATION)

  /** api params state */
  const [filterTitle, setFilterTitle] = useState('')
  const [filterDescription, setFilterDescription] = useState('')
  const [filterAuth, setFilterAuth] = useState<AuthType>(undefined)
  const [filterHttps, setFilterHttps] = useState<boolean>(undefined)
  const [filterCors, setFilterCors] = useState<CorsType>(undefined)
  const [filterCategory, setFilterCategory] = useState<CategoryType>(undefined)

  const [apis, setApis] = useState<Api[]>(undefined)

  useEffect(() => {
    handleOnClickRandom()
  }, [])

  const handleOnClickFilterToggle = () => {
    setFilterOpen(!filterOpen)
  }

  const handleOnChangeFilterTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextTitle } = e.target
    setFilterTitle(nextTitle)
  }

  const handleOnChangeFilterDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextDescription } = e.target
    setFilterDescription(nextDescription)
  }

  const handleOnChangeFilterCategory = (nextCategory: CategoryType) => {
    setFilterCategory(nextCategory)
  }

  const handleOnChangeFilterAuth = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextAuth } = e.target
    setFilterAuth(nextAuth as AuthType)
  }

  const handleOnChangeFilterCors = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextCors } = e.target
    setFilterCors(nextCors as CorsType)
  }

  const handleOnChangeFilterHttps = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value: nextHttps } = e.target
    if (nextHttps === 'true') {
      setFilterHttps(true)
    } else {
      setFilterHttps(false)
    }
  }

  const handleOnClickRandom = async () => {
    setRandomLoading(true)

    try {
      const {
        data: { entries: nextRandomApis },
      } = await publicApis.random({
        title: filterTitle,
        description: filterDescription,
        auth: filterAuth,
        https: filterHttps,
        cors: filterCors,
        category: filterCategory,
      })
      setApis(nextRandomApis ?? [])
    } catch (error) {
      setApis([])
    } finally {
      handleOnChangePagination(DEFAULT_PAGINATION.current, DEFAULT_PAGINATION.pageSize)
      setRandomLoading(false)
    }
  }

  const handleOnClickSearch = async () => {
    setSearchLoading(true)

    try {
      const {
        data: { entries: nextApis },
      } = await publicApis.entries({
        title: filterTitle,
        description: filterDescription,
        auth: filterAuth,
        https: filterHttps,
        cors: filterCors,
        category: filterCategory,
      })
      setApis(nextApis ?? [])
    } catch (error) {
      setApis([])
    } finally {
      handleOnChangePagination(DEFAULT_PAGINATION.current, DEFAULT_PAGINATION.pageSize)
      setSearchLoading(false)
    }
  }

  const handleOnChangePagination = (nextPage: number, nextPageSize?: number) => {
    setPagination({ current: nextPage, pageSize: nextPageSize })
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }
  const categoryTypes = Object.keys(CategoryType).map((key) => CategoryType[key] as CategoryType)

  return (
    <Layout>
      <Header>
        <HeaderTop>
          <HeaderTopLeft>
            <Title>{applicationName}</Title>
            <Description>
              <span role="img" aria-label="search" style={{ marginRight: '0.5rem' }}>
                🔍
              </span>
              {description}
            </Description>
          </HeaderTopLeft>
          <ThemeToggleSwitch />
        </HeaderTop>
        <HeaderBottom>
          <FilterToggleButton onClick={handleOnClickFilterToggle}>
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{
                marginRight: '0.5rem',
                transform: `rotate(${filterOpen ? '180deg' : '0deg'})`,
                transition: 'transform 0.5s ease-in-out',
              }}
            />
            Filter Options
          </FilterToggleButton>
          <ActionContainer>
            <Button
              size="small"
              style={{ marginRight: '0.5rem' }}
              loading={randomLoading}
              icon={<FontAwesomeIcon icon={faDice} style={{ marginRight: '0.25rem' }} />}
              onClick={handleOnClickRandom}>
              Random
            </Button>
            <Button
              size="small"
              type="primary"
              loading={searchLoading}
              icon={<SearchOutlined />}
              onClick={handleOnClickSearch}>
              Search
            </Button>
          </ActionContainer>
        </HeaderBottom>
        <Filter open={filterOpen}>
          <FilterItemContainer>
            <FilterItemTitle>Name</FilterItemTitle>
            <FilterItemInput>
              <Input
                size="small"
                bordered={false}
                allowClear
                placeholder="API Name"
                id="name"
                value={filterTitle}
                onChange={handleOnChangeFilterTitle}
              />
            </FilterItemInput>
          </FilterItemContainer>
          <FilterItemContainer>
            <FilterItemTitle>Description</FilterItemTitle>
            <FilterItemInput>
              <Input
                size="small"
                bordered={false}
                allowClear
                placeholder="API Description"
                id="description"
                value={filterDescription}
                onChange={handleOnChangeFilterDescription}
              />
            </FilterItemInput>
          </FilterItemContainer>
          <FilterItemContainer>
            <FilterItemTitle>Category</FilterItemTitle>
            <FilterItemInput>
              <Select
                size="small"
                style={{ width: '100%' }}
                bordered={false}
                allowClear
                placeholder="Category"
                id="category"
                defaultValue={filterCategory}
                onChange={handleOnChangeFilterCategory}>
                {categoryTypes.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </FilterItemInput>
          </FilterItemContainer>
          <FilterItemContainer>
            <FilterItemTitle>Auth</FilterItemTitle>
            <FilterItemInput>
              <RadioGroup
                radioGroup={[
                  { value: AuthType.API_KEY, label: 'API Key' },
                  { value: AuthType.OAUTH, label: 'OAuth' },
                  { value: AuthType.X_MASHAPE_KEY, label: 'X-Mashape-Key' },
                ]}
                onChange={handleOnChangeFilterAuth}
                onClear={() => {
                  setFilterAuth(undefined)
                }}
                name="auth"
                value={filterAuth}
              />
            </FilterItemInput>
          </FilterItemContainer>
          <FilterItemContainer>
            <FilterItemTitle>CORS</FilterItemTitle>
            <FilterItemInput>
              <RadioGroup
                radioGroup={[
                  { value: CorsType.YES, label: 'Yes' },
                  { value: CorsType.NO, label: 'No' },
                  { value: CorsType.UNKNOWN, label: 'Unknown' },
                ]}
                onChange={handleOnChangeFilterCors}
                onClear={() => {
                  setFilterCors(undefined)
                }}
                name="cors"
                value={filterCors}
              />
            </FilterItemInput>
          </FilterItemContainer>
          <FilterItemContainer>
            <FilterItemTitle>HTTPS</FilterItemTitle>
            <FilterItemInput>
              <RadioGroup
                radioGroup={[
                  { value: 'true', label: 'HTTPS' },
                  { value: 'false', label: 'HTTP' },
                ]}
                onChange={handleOnChangeFilterHttps}
                onClear={() => {
                  console.log('clear')
                  setFilterHttps(undefined)
                }}
                name="https"
                value={filterHttps !== undefined ? (filterHttps === true ? 'true' : 'false') : ''}
              />
            </FilterItemInput>
          </FilterItemContainer>
        </Filter>
      </Header>
      <Main>
        {apis && (
          <ApiList
            apis={apis}
            loading={randomLoading || searchLoading}
            pagination={pagination}
            onChangePagination={handleOnChangePagination}
          />
        )}
      </Main>
      <Footer />
    </Layout>
  )
}

export default Home
