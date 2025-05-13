import { Checkbox, Select, SelectItem } from '@heroui/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

export interface FormatOptionsProps {
  indent: number
  sortKeys: boolean
  removeQuotes: boolean
  compactMode: boolean
  onIndentChange: (value: number) => void
  onSortKeysChange: (checked: boolean) => void
  onRemoveQuotesChange: (checked: boolean) => void
  onCompactModeChange: (checked: boolean) => void
}

const FormatOptions: React.FC<FormatOptionsProps> = ({
  indent,
  sortKeys,
  removeQuotes,
  compactMode,
  onIndentChange,
  onSortKeysChange,
  onRemoveQuotesChange,
  onCompactModeChange,
}) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col gap-4 p-4 bg-default-100 rounded-lg">
      <div className="flex flex-wrap gap-4">
        <div className="flex flex-row gap-2">
          <Select
            label={t('JsonFormatter.indentSize')}
            variant="faded"
            value={indent.toString()}
            onChange={(e) => onIndentChange(Number(e.target.value))}
            classNames={{
              base: 'w-40',
              label: 'min-w-[80px] text-center m-auto',
            }}
            scrollShadowProps={{
              isEnabled: false,
            }}
            defaultSelectedKeys={['2']}
            labelPlacement="outside-left"
          >
            <SelectItem key="2" value="2">
              2
            </SelectItem>
            <SelectItem key="4" value="4">
              4
            </SelectItem>
            <SelectItem key="6" value="6">
              6
            </SelectItem>
            <SelectItem key="8" value="8">
              8
            </SelectItem>
          </Select>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox id="sort-keys" isSelected={sortKeys} onValueChange={onSortKeysChange} />
          <label htmlFor="sort-keys">{t('JsonFormatter.sortKeys')}</label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="remove-quotes"
            isSelected={removeQuotes}
            onValueChange={onRemoveQuotesChange}
          />
          <label htmlFor="remove-quotes">{t('JsonFormatter.removeQuotes')}</label>
        </div>

        <div className="flex items-center gap-2">
          <Checkbox
            id="compact-mode"
            isSelected={compactMode}
            onValueChange={onCompactModeChange}
          />
          <label htmlFor="compact-mode">{t('JsonFormatter.compactMode')}</label>
        </div>
      </div>
    </div>
  )
}

export default FormatOptions
