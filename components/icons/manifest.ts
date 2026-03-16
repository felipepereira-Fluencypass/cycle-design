/**
 * Cycle Design — Icon Manifest
 *
 * Registro central de todos os ícones do sistema.
 * Este arquivo é MANTIDO MANUALMENTE — o build só adiciona novos ícones.
 *
 * Para publicar um ícone:
 * 1. Mude o status de 'experimental' para 'stable'
 * 2. Rode: npm run build:icons (regenera os barrels)
 *
 * Para deprecar um ícone:
 * 1. Mude o status para 'deprecated'
 * 2. Adicione replacedBy: 'NomeDoIconeNovo'
 *
 * Ícones genéricos (actions, navigation, status, etc.) foram migrados para Lucide.
 * Este manifest contém apenas os ícones custom do domínio Fluencypass.
 */
import type { IconManifestEntry } from './types'

export const ICON_MANIFEST: Record<string, IconManifestEntry> = {
  AchievementIcon: { category: 'learning-core', status: 'stable' },
  AiIcon: { category: 'technology', status: 'stable' },
  AnswerIcon: { category: 'learning-core', status: 'stable' },
  BadgeIcon: { category: 'learning-core', status: 'stable' },
  CertificateIcon: { category: 'learning-core', status: 'stable' },
  CheckboxIndeterminateIcon: { category: 'forms', status: 'stable' },
  CheckpointIcon: { category: 'learning-core', status: 'stable' },
  ConversationIcon: { category: 'language-learning', status: 'stable' },
  CourseIcon: { category: 'learning-core', status: 'stable' },
  DialogueIcon: { category: 'language-learning', status: 'stable' },
  DictionaryIcon: { category: 'language-learning', status: 'stable' },
  DiplomaIcon: { category: 'learning-core', status: 'stable' },
  DotLiveIcon: { category: 'status', status: 'stable' },
  ExerciseIcon: { category: 'learning-core', status: 'stable' },
  FeedbackIcon: { category: 'language-learning', status: 'stable' },
  FlashcardIcon: { category: 'learning-core', status: 'stable' },
  FluencyIcon: { category: 'language-learning', status: 'stable' },
  GrammarIcon: { category: 'language-learning', status: 'stable' },
  GroupClassIcon: { category: 'lesson-formats', status: 'stable' },
  LessonIcon: { category: 'learning-core', status: 'stable' },
  LiveIcon: { category: 'lesson-formats', status: 'stable' },
  MemoryCardIcon: { category: 'language-learning', status: 'stable' },
  ModuleIcon: { category: 'learning-core', status: 'stable' },
  PrivateClassIcon: { category: 'lesson-formats', status: 'stable' },
  ProgressIcon: { category: 'learning-core', status: 'stable' },
  QuizIcon: { category: 'learning-core', status: 'stable' },
  RayIcon: { category: 'learning-core', status: 'stable' },
  ReadingIcon: { category: 'language-learning', status: 'stable' },
  RecapIcon: { category: 'learning-core', status: 'stable' },
  RecordedClassIcon: { category: 'lesson-formats', status: 'stable' },
  RepetitionIcon: { category: 'language-learning', status: 'stable' },
  SentenceIcon: { category: 'language-learning', status: 'stable' },
  TranslateIcon: { category: 'language-learning', status: 'stable' },
  UnitIcon: { category: 'learning-core', status: 'stable' },
  VocabularyIcon: { category: 'language-learning', status: 'stable' },
  WhiteboardIcon: { category: 'lesson-formats', status: 'stable' },
}
