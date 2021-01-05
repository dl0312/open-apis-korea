import React, { ReactElement } from 'react'

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styles/themed-components'

const RadioGroupForm = styled.form`
  display: flex;
`

const RadioInput = styled.input`
  display: none;
`

const ClearButton = styled(FontAwesomeIcon)`
  position: absolute;
  top: -5px;
  right: -5px;
  color: white;
  box-shadow: #4c4c4c 1px 1px 5px;
  border-radius: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: none;
`

const RadioLabel = styled.label<{ checked: boolean }>`
  position: relative;
  background: ${({ checked, theme: { linkText } }) => (checked ? linkText : undefined)};
  color: ${({
    checked,
    theme: {
      inverse: { title },
    },
  }) => (checked ? title : undefined)};

  border-radius: 1rem;
  padding: 0.3rem 0.5rem 0.4rem;
  margin-right: 0.3rem;
  &:hover {
    ${ClearButton} {
      display: ${({ checked }) => (checked ? 'block' : undefined)};
    }
  }
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
  onClear: () => void
}

function RadioGroup({ radioGroup, onChange, name, value: currentValue, onClear }: Props): ReactElement {
  const handleOnClickClear = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    e.preventDefault()
    onClear()
  }

  return (
    <RadioGroupForm>
      {radioGroup.map(({ value, label }) => (
        <RadioLabel key={value} checked={value === currentValue}>
          <RadioInput name={name} value={value} type="radio" onChange={onChange} checked={value === currentValue} />
          {label}
          <ClearButton icon={faTimesCircle} onClick={handleOnClickClear} />
        </RadioLabel>
      ))}
    </RadioGroupForm>
  )
}

export default RadioGroup
