import { Card, CardBody } from '@heroui/react'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import FormatOptions from '../../components/json-formatter/FormatOptions'
import JsonInput from '../../components/json-formatter/JsonInput'
import JsonOutput from '../../components/json-formatter/JsonOutput'

const JsonFormatterPage: React.FC = () => {
  const { t } = useTranslation()
  const [inputJson, setInputJson] = useState<string>('')
  const [formattedJson, setFormattedJson] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  // Format options
  const [indent, setIndent] = useState<number>(2)
  const [sortKeys, setSortKeys] = useState<boolean>(false)
  const [removeQuotes, setRemoveQuotes] = useState<boolean>(false)
  const [compactMode, setCompactMode] = useState<boolean>(false)

  // Format JSON whenever input or options change
  useEffect(() => {
    if (inputJson.trim()) {
      try {
        // Parse JSON to validate it
        let parsedJson = JSON.parse(inputJson)

        // Sort keys if option is enabled
        if (sortKeys) {
          parsedJson = sortJsonKeys(parsedJson)
        }

        // Format JSON with specified indent
        const formattingSpace = compactMode ? 0 : indent
        let formatted = JSON.stringify(parsedJson, null, formattingSpace)

        // Remove quotes from property names if option is enabled
        if (removeQuotes) {
          formatted = formatted.replace(/"([^"]+)":/g, '$1:')
        }

        setFormattedJson(formatted)
        setError(null)
      } catch {
        // Ignore error details, just show generic message
        setFormattedJson('')
        setError(t('JsonFormatter.invalidJson'))
      }
    } else {
      setFormattedJson('')
      setError(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputJson, indent, sortKeys, removeQuotes, compactMode, t])

  // Function to sort JSON keys alphabetically
  const sortJsonKeys = (obj: unknown): unknown => {
    // Handle non-objects
    if (obj === null || typeof obj !== 'object') {
      return obj
    }

    // Handle arrays
    if (Array.isArray(obj)) {
      return obj.map((item) => sortJsonKeys(item))
    }

    // Handle objects
    const sortedObj: Record<string, unknown> = {}
    const sortedKeys = Object.keys(obj as Record<string, unknown>).sort()

    for (const key of sortedKeys) {
      sortedObj[key] = sortJsonKeys((obj as Record<string, unknown>)[key])
    }

    return sortedObj
  }

  // Function to handle paste from clipboard
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText()
      setInputJson(text)
    } catch (err) {
      console.error('Failed to read clipboard:', err)
    }
  }

  // Function to copy formatted JSON to clipboard
  const handleCopy = () => {
    navigator.clipboard
      .writeText(formattedJson)
      .catch((err) => console.error('Failed to copy to clipboard:', err))
  }

  // Function to download formatted JSON
  const handleDownload = () => {
    const blob = new Blob([formattedJson], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'formatted.json'
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="flex justify-center items-start">
      <Card className="w-screen lg:w-4/5 rounded-lg bg-background h-fit" radius="none">
        <CardBody className="p-10 overflow-hidden h-fit">
          <h1 className="text-3xl font-bold mb-6">{t('JsonFormatter.title')}</h1>
          <p className="text-muted-foreground mb-6">{t('JsonFormatter.description')}</p>

          <div className="mb-8">
            <FormatOptions
              indent={indent}
              sortKeys={sortKeys}
              removeQuotes={removeQuotes}
              compactMode={compactMode}
              onIndentChange={setIndent}
              onSortKeysChange={setSortKeys}
              onRemoveQuotesChange={setRemoveQuotes}
              onCompactModeChange={setCompactMode}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-8 h-fit">
            <div className="flex-1">
              <JsonInput value={inputJson} onChange={setInputJson} onPaste={handlePaste} />
            </div>
            <div className="flex-1">
              <JsonOutput
                formattedJson={formattedJson}
                error={error}
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default JsonFormatterPage
