import { Button, Textarea } from '@heroui/react'
import { Clipboard, FileUp } from 'lucide-react'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'

interface JsonInputProps {
  value: string
  onChange: (value: string) => void
  onPaste: () => void
}

const JsonInput: React.FC<JsonInputProps> = ({ value, onChange, onPaste }) => {
  const { t } = useTranslation()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const content = e.target?.result as string
      onChange(content)
    }
    reader.readAsText(file)

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClickUpload = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className="flex flex-col gap-3 h-fit">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{t('JsonFormatter.inputJson')}</h3>
        <div className="flex flex-col lg:flex-row gap-2 justify-end">
          <Button
            className='hidden md:flex'
            color="primary"
            variant="flat"
            startContent={<Clipboard size={18} />}
            onClick={onPaste}
            size="sm"
          >
            {t('JsonFormatter.pasteFromClipboard')}
          </Button>
          <Button
            color="primary"
            variant="flat"
            startContent={<FileUp size={18} />}
            onClick={handleClickUpload}
            size="sm"
          >
            {t('JsonFormatter.uploadFile')}
          </Button>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileUpload}
            accept=".json,application/json"
            className="hidden"
          />
        </div>
      </div>
      <Textarea
        placeholder={t('JsonFormatter.enterOrPasteJson')}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onClear={() => onChange('')}
        disableAnimation
        disableAutosize
        classNames={{
          base: 'w-full',
          input: 'resize-y min-h-[500px]',
        }}
      />
    </div>
  )
}

export default JsonInput
