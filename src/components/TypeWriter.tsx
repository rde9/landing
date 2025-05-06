'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { sampleTexts } from '@/constants';

interface TypeWriterProps {
  className?: string;
}

const slideOutKeyframes = `
@keyframes typewriter-slide-out {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-15px); }
}`;

const TypeWriter: React.FC<TypeWriterProps> = ({ className = '' }) => {
  const [text, setText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [status, setStatus] = useState<'typing' | 'waiting' | 'sliding'>('typing');
  const [animationKey, setAnimationKey] = useState(0); // 用于强制重置动画
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomTextIndex = () => {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * sampleTexts.length);
    } while (newIndex === textIndex && sampleTexts.length > 1);
    return newIndex;
  };

  const getTypingSpeed = useCallback(() => {
    const fullText = sampleTexts[textIndex];
    const nextChar = fullText[text.length];
    const isCJK = /[\u4e00-\u9fff\u3040-\u30ff]/.test(nextChar);
    if (nextChar === ' ') return 60;
    if (isCJK) return 130 - Math.random() * 40;
    return 80 - Math.random() * 50;
  }, [text, textIndex]);

  useEffect(() => {
    if (status !== 'typing') return;
    if (text === sampleTexts[textIndex]) {
      setStatus('waiting');
      return;
    }
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setText(sampleTexts[textIndex].substring(0, text.length + 1));
    }, getTypingSpeed());
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [text, textIndex, status, getTypingSpeed]);

  useEffect(() => {
    if (status !== 'waiting') return;
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setStatus('sliding');
    }, 4000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [status]);

  const handleAnimationEnd = () => {
    if (status === 'sliding') {
      setText('');
      setTextIndex(getRandomTextIndex());
      setStatus('typing');
      setAnimationKey((prev) => prev + 1);
    }
  };

  // Instantly show cursor when typing
  useEffect(() => {
    if (status === 'typing') {
      setShowCursor(true);
    }
  }, [status]);

  // Cursor blinking
  useEffect(() => {
    if (status === 'sliding') {
      setShowCursor(false);
      return;
    }
    if (status === 'waiting') {
      setShowCursor(true);
      return;
    }
    const blink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 450);
    return () => {
      clearInterval(blink);
    };
  }, [status]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (document.getElementById('typewriter-slide-out-style')) return;
    const style = document.createElement('style');
    style.id = 'typewriter-slide-out-style';
    style.innerHTML = slideOutKeyframes;
    document.head.appendChild(style);
  }, []);

  return (
    <div
      key={animationKey}
      className={`${className} ${status === 'sliding' ? 'typewriter-slide-out' : ''}`}
      style={
        status === 'sliding'
          ? {
              animation: 'typewriter-slide-out 0.7s cubic-bezier(.4,1.2,.6,1) forwards',
            }
          : {}
      }
      onAnimationEnd={handleAnimationEnd}
    >
      <span className="whitespace-pre-wrap">
        {text}
        <span
          className={`mb-[-2px] ml-[4px] inline-block size-[1em] rounded-full bg-fg transition-opacity duration-150 ${
            showCursor ? 'opacity-10' : 'opacity-0'
          }`}
        />
      </span>
    </div>
  );
};

export default TypeWriter;
