import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { PageLayout } from '@/components/layout/PageLayout'
import { useTheme } from '@/hooks/useTheme'

// Pages
import Home from '@/pages/Home'
import Introduction from '@/pages/getting-started/Introduction'
import Installation from '@/pages/getting-started/Installation'
import DarkMode from '@/pages/getting-started/DarkMode'
import Colors from '@/pages/tokens/Colors'
import Typography from '@/pages/tokens/Typography'
import Spacing from '@/pages/tokens/Spacing'
import Shadows from '@/pages/tokens/Shadows'
import BordersRadius from '@/pages/tokens/BordersRadius'
import Opacity from '@/pages/tokens/Opacity'
import Grid from '@/pages/tokens/Grid'
import Icons from '@/pages/tokens/Icons'
import Decisions from '@/pages/guidelines/Decisions'
import Accessibility from '@/pages/guidelines/Accessibility'
import LlmsTxt from '@/pages/ai/LlmsTxt'
import Mcp from '@/pages/ai/Mcp'
import Components from '@/pages/components'
import ButtonPage from '@/pages/components/Button'
import LabelPage from '@/pages/components/Label'
import InputPage from '@/pages/components/Input'
import TextareaPage from '@/pages/components/Textarea'
import SelectPage from '@/pages/components/Select'
import CheckboxPage from '@/pages/components/Checkbox'
import RadioGroupPage from '@/pages/components/RadioGroup'
import SwitchPage from '@/pages/components/Switch'
import FieldPage from '@/pages/components/Field'
import CardPage from '@/pages/components/Card'
import BadgePage from '@/pages/components/Badge'
import AvatarPage from '@/pages/components/Avatar'
import AlertPage from '@/pages/components/Alert'
import SeparatorPage from '@/pages/components/Separator'
import SkeletonPage from '@/pages/components/Skeleton'
import SpinnerPage from '@/pages/components/Spinner'
import ProgressPage from '@/pages/components/Progress'

export default function App() {
  const { theme, toggle } = useTheme()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    if (!isSidebarOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isSidebarOpen])

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>
      <Header
        theme={theme}
        isSidebarOpen={isSidebarOpen}
        onToggleTheme={toggle}
        onToggleSidebar={() => setSidebarOpen(o => !o)}
      />
      <Routes>
        <Route element={
          <PageLayout
            isSidebarOpen={isSidebarOpen}
            onCloseSidebar={() => setSidebarOpen(false)}
          />
        }>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started/introduction" element={<Introduction />} />
          <Route path="/getting-started/installation" element={<Installation />} />
          <Route path="/getting-started/dark-mode" element={<DarkMode />} />
          <Route path="/tokens/colors" element={<Colors />} />
          <Route path="/tokens/typography" element={<Typography />} />
          <Route path="/tokens/spacing" element={<Spacing />} />
          <Route path="/tokens/shadows" element={<Shadows />} />
          <Route path="/tokens/borders-radius" element={<BordersRadius />} />
          <Route path="/tokens/opacity" element={<Opacity />} />
          <Route path="/tokens/grid" element={<Grid />} />
          <Route path="/tokens/icons" element={<Icons />} />
          <Route path="/guidelines/decisions" element={<Decisions />} />
          <Route path="/guidelines/accessibility" element={<Accessibility />} />
          <Route path="/ai/llms-txt" element={<LlmsTxt />} />
          <Route path="/ai/mcp" element={<Mcp />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/label" element={<LabelPage />} />
          <Route path="/components/input" element={<InputPage />} />
          <Route path="/components/textarea" element={<TextareaPage />} />
          <Route path="/components/select" element={<SelectPage />} />
          <Route path="/components/checkbox" element={<CheckboxPage />} />
          <Route path="/components/radio-group" element={<RadioGroupPage />} />
          <Route path="/components/switch" element={<SwitchPage />} />
          <Route path="/components/field" element={<FieldPage />} />
          <Route path="/components/card" element={<CardPage />} />
          <Route path="/components/badge" element={<BadgePage />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/separator" element={<SeparatorPage />} />
          <Route path="/components/skeleton" element={<SkeletonPage />} />
          <Route path="/components/spinner" element={<SpinnerPage />} />
          <Route path="/components/progress" element={<ProgressPage />} />
        </Route>
      </Routes>
    </>
  )
}
