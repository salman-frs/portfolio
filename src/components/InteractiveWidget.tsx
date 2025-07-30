'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Plus, MoreHorizontal, ArrowLeft, FileText, Github, ExternalLink } from 'lucide-react'
import { FaLinkedin } from 'react-icons/fa'

type WidgetState = 'collapsed' | 'expanded' | 'audio' | 'menu'

export default function DynamicIslandWidget() {
  const [state, setState] = useState<WidgetState>('collapsed')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAudioPlaying, setIsAudioPlaying] = useState(false)
  const [hoveredMenuItem, setHoveredMenuItem] = useState<string | null>(null)
  const [isPlusRotating, setIsPlusRotating] = useState(false)
  const [isDotsJumping, setIsDotsJumping] = useState(false)
  
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  
  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  // Clean state change handler
  const handleStateChange = useCallback((newState: WidgetState) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    
    setTimeout(() => {
      setState(newState)
      setIsTransitioning(false)
    }, 150)
  }, [isTransitioning])

  const handlePlusClick = useCallback(() => handleStateChange('expanded'), [handleStateChange])
  const handlePersonClick = useCallback(() => handleStateChange('collapsed'), [handleStateChange])
  const handleAudioClick = useCallback(() => handleStateChange('audio'), [handleStateChange])
  const handleMenuClick = useCallback(() => handleStateChange('menu'), [handleStateChange])
  const handleBackClick = useCallback(() => handleStateChange('expanded'), [handleStateChange])
  const handleAudioReturn = useCallback(() => handleStateChange('expanded'), [handleStateChange])

  const handleAudioHover = useCallback(() => {
    if (!isAudioPlaying) {
      setIsAudioPlaying(true)
      setTimeout(() => setIsAudioPlaying(false), 2000)
    }
  }, [isAudioPlaying])

  const handlePlusHover = useCallback(() => {
    if (!isPlusRotating) {
      setIsPlusRotating(true)
      setTimeout(() => setIsPlusRotating(false), 600)
    }
  }, [isPlusRotating])

  const handleDotsHover = useCallback(() => {
    if (!isDotsJumping) {
      setIsDotsJumping(true)
      setTimeout(() => setIsDotsJumping(false), 800)
    }
  }, [isDotsJumping])

  // Clean iOS animations with improved layout
  const containerVariants = {
    collapsed: { 
      width: 'auto',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    expanded: { 
      width: 'auto',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    },
    audio: {
      width: 'auto', 
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
    },
    menu: {
      width: 'auto',
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] }
    }
  }

  const contentVariants = {
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.05
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.15,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const itemVariants = {
    enter: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] }
    },
    exit: {
      opacity: 0,
      y: 4,
      transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] }
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-gray-50 to-white">
      {/* Dynamic Island Container */}
      <motion.div
        className="dynamic-island"
        variants={containerVariants}
        animate={state}
        layout
      >
        <AnimatePresence mode="wait">
          {/* Collapsed State - True Dynamic Island */}
          {state === 'collapsed' && (
            <motion.div
              key="collapsed"
              variants={contentVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="flex items-center gap-3"
            >
              <motion.div
                variants={itemVariants}
                className="ios-button w-8 h-8 rounded-full flex items-center justify-center"
              >
                <User className="ios-icon w-4 h-4 text-white" />
              </motion.div>
              
              <motion.button
                variants={itemVariants}
                className="ios-button-primary w-8 h-8 rounded-full flex items-center justify-center"
                onClick={handlePlusClick}
                onHoverStart={handlePlusHover}
                whileTap={{ scale: 0.9 }}
                disabled={isTransitioning}
              >
                <motion.div
                  animate={isPlusRotating ? { 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  } : { 
                    rotate: 0,
                    scale: 1
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                >
                  <Plus className="ios-icon w-4 h-4 text-white" />
                </motion.div>
              </motion.button>
            </motion.div>
          )}

          {/* Expanded State - Clean Layout */}
          {state === 'expanded' && (
            <motion.div
              key="expanded"
              variants={contentVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="flex items-center gap-4"
            >
              <motion.button
                variants={itemVariants}
                onClick={handlePersonClick}
                className="flex items-center gap-3 px-3 py-2 rounded-full"
                whileTap={{ scale: 0.95 }}
                disabled={isTransitioning}
              >
                <div className="ios-button w-7 h-7 rounded-full flex items-center justify-center">
                  <User className="ios-icon w-3.5 h-3.5 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-white text-ios-caption opacity-70">Hello I'm</div>
                  <div className="text-white text-ios-footnote font-medium">Salman</div>
                </div>
              </motion.button>
              
              <div className="flex items-center gap-3">
                {/* Audio Button */}
                <motion.button
                  variants={itemVariants}
                  className="ios-button w-9 h-9 rounded-full flex items-center justify-center bg-ios-green"
                  onClick={handleAudioClick}
                  onHoverStart={handleAudioHover}
                  whileTap={{ scale: 0.9 }}
                  disabled={isTransitioning}
                >
                  {/* Simple Wave Animation */}
                  <div className="flex items-center justify-center gap-0.5">
                    {[...Array(4)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-0.5 bg-white rounded-full"
                        animate={isAudioPlaying ? {
                          height: [4, 10, 6, 12],
                          opacity: [0.7, 1, 0.8, 1]
                        } : { 
                          height: 5, 
                          opacity: 0.8
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: isAudioPlaying ? Infinity : 0,
                          delay: i * 0.12,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.button>

                {/* Menu Button - With 3-Dot Bounce Animation */}
                <motion.button
                  variants={itemVariants}
                  className="ios-button w-9 h-9 rounded-full flex items-center justify-center bg-ios-orange"
                  onClick={handleMenuClick}
                  onHoverStart={handleDotsHover}
                  whileTap={{ scale: 0.9 }}
                  disabled={isTransitioning}
                >
                  <div className="flex items-center gap-1">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-1 h-1 bg-white rounded-full"
                        animate={isDotsJumping ? {
                          y: [-2, -6, -2],
                          scale: [1, 1.2, 1]
                        } : {
                          y: 0,
                          scale: 1
                        }}
                        transition={{
                          duration: 0.4,
                          delay: i * 0.1,
                          ease: [0.4, 0, 0.2, 1]
                        }}
                      />
                    ))}
                  </div>
                </motion.button>
              </div>
            </motion.div>
          )}

          {/* Audio State - Integrated Story Display */}
          {state === 'audio' && (
            <motion.div
              key="audio"
              variants={contentVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="flex items-center gap-4"
            >
              <motion.div 
                className="flex items-center gap-4 px-4 py-3"
                variants={itemVariants}
              >
                {/* Wave Animation */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 bg-ios-green rounded-full"
                      animate={{
                        height: [8, 16, 12, 20, 8],
                        opacity: [0.6, 1, 0.8, 1, 0.6]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.1,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* Compact Story Info */}
                <div className="flex items-center gap-3">
                  <div className="text-left max-w-xs">
                    <div className="text-white text-ios-caption opacity-70">About Me</div>
                    <div className="text-white text-ios-footnote font-medium leading-tight">
                      DevOps engineer passionate about automation, CI/CD, cloud infrastructure & system reliability.
                    </div>
                  </div>
                  
                  <motion.button
                    className="ios-button w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    onClick={handleAudioReturn}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ArrowLeft className="ios-icon w-3.5 h-3.5 text-white" />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}

          {/* Menu State - Individual Icon Hover Expand */}
          {state === 'menu' && (
            <motion.div
              key="menu"
              variants={contentVariants}
              initial="exit"
              animate="enter"
              exit="exit"
              className="flex items-center gap-2"
            >
              {[
                { id: 'back', icon: ArrowLeft, label: 'Back', action: handleBackClick },
                { id: 'cv', icon: FileText, label: 'Read CV', href: 'https://resume.salmanfrs.dev/' },
                { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/salman-frs/' },
                { id: 'linkedin', icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/salman-frs/' },
              ].map((item, index) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative flex items-center"
                  custom={index}
                >
                  {item.href ? (
                    <motion.a
                      href={item.href}
                      target="_blank"
                      className="ios-button rounded-full flex items-center justify-center overflow-hidden"
                      initial={{ width: 32 }}
                      animate={{
                        width: hoveredMenuItem === item.id ? 'auto' : 32,
                        paddingLeft: hoveredMenuItem === item.id ? 12 : 8,
                        paddingRight: hoveredMenuItem === item.id ? 12 : 8
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "tween"
                      }}
                      onHoverStart={() => setHoveredMenuItem(item.id)}
                      onHoverEnd={() => setHoveredMenuItem(null)}
                      whileTap={{ 
                        scale: 0.92,
                        transition: { duration: 0.1 }
                      }}
                      style={{ 
                        height: 32,
                        willChange: 'width, padding',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    >
                      <item.icon className="ios-icon w-4 h-4 text-white flex-shrink-0" />
                      <AnimatePresence mode="wait">
                        {hoveredMenuItem === item.id && (
                          <motion.span
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ 
                              duration: 0.15,
                              ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="text-white text-ios-caption font-medium whitespace-nowrap ml-2"
                            style={{
                              willChange: 'opacity, transform',
                              backfaceVisibility: 'hidden'
                            }}
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.a>
                  ) : (
                    <motion.button
                      className="ios-button rounded-full flex items-center justify-center overflow-hidden"
                      initial={{ width: 32 }}
                      animate={{
                        width: hoveredMenuItem === item.id ? 'auto' : 32,
                        paddingLeft: hoveredMenuItem === item.id ? 12 : 8,
                        paddingRight: hoveredMenuItem === item.id ? 12 : 8
                      }}
                      transition={{ 
                        duration: 0.2, 
                        ease: [0.25, 0.1, 0.25, 1],
                        type: "tween"
                      }}
                      onClick={item.action}
                      onHoverStart={() => setHoveredMenuItem(item.id)}
                      onHoverEnd={() => setHoveredMenuItem(null)}
                      whileTap={{ 
                        scale: 0.92,
                        transition: { duration: 0.1 }
                      }}
                      disabled={isTransitioning}
                      style={{ 
                        height: 32,
                        willChange: 'width, padding',
                        backfaceVisibility: 'hidden',
                        transform: 'translateZ(0)'
                      }}
                    >
                      <item.icon className="ios-icon w-4 h-4 text-white flex-shrink-0" />
                      <AnimatePresence mode="wait">
                        {hoveredMenuItem === item.id && (
                          <motion.span
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -8 }}
                            transition={{ 
                              duration: 0.15,
                              ease: [0.25, 0.1, 0.25, 1]
                            }}
                            className="text-white text-ios-caption font-medium whitespace-nowrap ml-2"
                            style={{
                              willChange: 'opacity, transform',
                              backfaceVisibility: 'hidden'
                            }}
                          >
                            {item.label}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}