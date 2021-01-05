import { ReactElement } from 'react'

import styled from 'styles/themed-components'

const RadioGroupForm = styled.form`
  display: flex;
`

const RadioContainer = styled.div``

const RadioInput = styled.input`
  display: none;
`

const RadioLabel = styled.label<{ checked: boolean }>`
  background: ${({ checked, theme: { linkText } }) => (checked ? linkText : undefined)};
  color: ${({
    checked,
    theme: {
      inverse: { title },
    },
  }) => (checked ? title : undefined)};

  border-radius: 1rem;
  padding: 0.2rem 0.5rem 0.3rem;
  margin-right: 0.3rem;
`

export interface Radio {
  value: string
  label: string
}

interface Props {
  radioGroup: Radio[]
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  name: string
  value: string
}

function RadioGroup({ radioGroup, onChange, name, value: currentValue }: Props): ReactElement {
  return (
    <RadioGroupForm>
      {radioGroup.map(({ value, label }) => (
        <RadioContainer key={value}>
          <RadioLabel checked={value === currentValue}>
            <RadioInput name={name} value={value} type="radio" onChange={onChange} checked={value === currentValue} />
            {label}
          </RadioLabel>
        </RadioContainer>
      ))}
    </RadioGroupForm>
  )
}

export default RadioGroup
