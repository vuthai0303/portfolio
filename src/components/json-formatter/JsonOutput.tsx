import { Button, Code } from '@heroui/react'
import { AlertTriangle, Copy, Download } from 'lucide-react'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface JsonOutputProps {
  formattedJson: string
  error: string | null
  onCopy: () => void
  onDownload: () => void
}

const JsonOutput: React.FC<JsonOutputProps> = ({ formattedJson, error, onCopy, onDownload }) => {
  const { t } = useTranslation()

  // Function to render JSON with syntax highlighting
  const renderJsonWithHighlight = () => {
    if (!formattedJson) return null

    // This is a simple implementation of syntax highlighting
    // In a real implementation, you would use a library like react-syntax-highlighter
    const highlighted = formattedJson
      .replace(/"([^"]+)":/g, '<span class="text-blue-500">"$1"</span>:')
      .replace(/:(\s*)"([^"]+)"/g, ':<span class="text-green-500">$1"$2"</span>')
      .replace(/:(\s*)(true|false)/g, ':<span class="text-purple-500">$1$2</span>')
      .replace(/:(\s*)(\d+)/g, ':<span class="text-orange-500">$1$2</span>')
      .replace(/:(\s*)(null)/g, ':<span class="text-gray-500">$1$2</span>')

    return (
      <pre
        className="h-full text-sm font-mono overflow-auto p-4 bg-default-50 rounded-lg"
        style={{}}
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    )
  }

  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold">{t('JsonFormatter.formattedOutput')}</h3>
        <div className="flex gap-2">
          <Button
            color="primary"
            variant="flat"
            startContent={<Copy size={18} />}
            onClick={onCopy}
            size="sm"
            isDisabled={!formattedJson || !!error}
          >
            {t('JsonFormatter.copyToClipboard')}
          </Button>
          <Button
            color="primary"
            variant="flat"
            startContent={<Download size={18} />}
            onClick={onDownload}
            size="sm"
            isDisabled={!formattedJson || !!error}
          >
            {t('JsonFormatter.downloadJson')}
          </Button>
        </div>
      </div>

      <Code className="h-full p-2">
        {error ? (
          <div className="flex flex-col justify-center items-center">
            <AlertTriangle className="text-danger" size={20} />
            <span className="text-danger">{error}</span>
          </div>
        ) : formattedJson ? (
          renderJsonWithHighlight()
        ) : (
          <div className="p-4 rounded-lg text-center text-gray-500">
            {t('JsonFormatter.noJsonToDisplay')}
          </div>
        )}
      </Code>
    </div>
  )
}

export default JsonOutput
