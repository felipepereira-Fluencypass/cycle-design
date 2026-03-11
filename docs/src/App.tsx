import { useState } from 'react'
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
import LlmsTxt from '@/pages/ai/LlmsTxt'
import Mcp from '@/pages/ai/Mcp'
import Components from '@/pages/components'

export default function App() {
  const { theme, toggle } = useTheme()
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <Header
        theme={theme}
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
          <Route path="/ai/llms-txt" element={<LlmsTxt />} />
          <Route path="/ai/mcp" element={<Mcp />} />
          <Route path="/components" element={<Components />} />
        </Route>
      </Routes>
    </>
  )
}
