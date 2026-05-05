import { Button, Card, CardBody, Chip, Textarea } from '@heroui/react'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'

const TextFormatterPage: React.FC = () => {
  const { t } = useTranslation()
  const [text, setText] = useState<string>('')

  const stats = useMemo(() => {
    const trimmed = text.trim()
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean).length : 0
    const characters = text.length
    const charactersNoSpaces = text.replace(/\s/g, '').length

    return { words, characters, charactersNoSpaces }
  }, [text])

  const applyTransform = (transform: (value: string) => string) => {
    setText((prev) => transform(prev))
  }

  // Capitalize the first character of EACH word and lowercase the rest of the word.
  // Example: "hELLO   wORLD" -> "Hello   World" (keeps original spacing)
  const capitalizeEachWord = (value: string) =>
    value.replace(/\S+/g, (word) => {
      if (!word) return word
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })

  const normalizeSpaces = (value: string) => value.replace(/\s+/g, ' ').trim()

  return (
    <div className="flex justify-center items-start">
      <Card className="w-full rounded-lg bg-background h-fit" radius="none">
        <CardBody className="p-10 overflow-hidden h-fit">
          <h1 className="text-3xl font-bold mb-6">{t('TextFormatter.title')}</h1>
          <p className="text-muted-foreground mb-6">{t('TextFormatter.description')}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Chip color="primary" variant="shadow">
              {t('TextFormatter.stats.words')}: {stats.words}
            </Chip>
            <Chip color="primary" variant="shadow">
              {t('TextFormatter.stats.characters')}: {stats.characters}
            </Chip>
            <Chip color="primary" variant="shadow">
              {t('TextFormatter.stats.charactersNoSpaces')}: {stats.charactersNoSpaces}
            </Chip>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            <Button color="primary" variant="flat" size="sm" onClick={() => applyTransform((v) => v.toUpperCase())}>
              {t('TextFormatter.actions.uppercase')}
            </Button>
            <Button color="primary" variant="flat" size="sm" onClick={() => applyTransform((v) => v.toLowerCase())}>
              {t('TextFormatter.actions.lowercase')}
            </Button>
            <Button
              color="primary"
              variant="flat"
              size="sm"
              onClick={() => applyTransform((v) => capitalizeEachWord(v))}
            >
              {t('TextFormatter.actions.capitalizeFirst')}
            </Button>
            <Button color="primary" variant="flat" size="sm" onClick={() => applyTransform((v) => normalizeSpaces(v))}>
              {t('TextFormatter.actions.onlySpace')}
            </Button>
            <Button color="danger" variant="flat" size="sm" onClick={() => setText('')}>
              {t('TextFormatter.actions.clear')}
            </Button>
          </div>

          <Textarea
            placeholder={t('TextFormatter.placeholder')}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClear={() => setText('')}
            disableAnimation
            disableAutosize
            classNames={{
              base: 'w-full',
              input: 'resize-y min-h-[500px]',
            }}
          />
        </CardBody>
      </Card>
    </div>
  )
}

export default TextFormatterPage

