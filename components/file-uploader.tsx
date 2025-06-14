"use client"

import type React from "react"

import { useState } from "react"
import { Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function FileUploader() {
  const [isDragging, setIsDragging] = useState(false)
  const [uploadingFiles, setUploadingFiles] = useState<{ name: string; progress: number }[]>([])

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    handleFiles(files)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files)
      handleFiles(files)
    }
  }

  const handleFiles = (files: File[]) => {
    // Simulate file upload with progress
    const newFiles = files.map((file) => ({
      name: file.name,
      progress: 0,
    }))

    setUploadingFiles([...uploadingFiles, ...newFiles])

    // Simulate progress updates
    newFiles.forEach((file, index) => {
      const interval = setInterval(() => {
        setUploadingFiles((current) =>
          current.map((f, i) => {
            if (f.name === file.name && f.progress < 100) {
              const newProgress = f.progress + 10
              if (newProgress >= 100) {
                clearInterval(interval)
              }
              return { ...f, progress: newProgress }
            }
            return f
          }),
        )
      }, 300)
    })
  }

  const cancelUpload = (fileName: string) => {
    setUploadingFiles((current) => current.filter((file) => file.name !== fileName))
  }

  return (
    <div className="space-y-4">
      <div
        className={`flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-6 transition-colors ${
          isDragging ? "border-primary bg-primary/5" : "border-gray-300"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <Upload className="mb-2 h-10 w-10 text-gray-400" />
        <p className="mb-1 text-lg font-medium">Drag and drop files here</p>
        <p className="mb-4 text-sm text-gray-500">or click to browse files</p>
        <Button asChild>
          <label>
            Browse Files
            <input type="file" className="hidden" multiple onChange={handleFileChange} />
          </label>
        </Button>
      </div>

      {uploadingFiles.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-medium">Uploading</h3>
          {uploadingFiles.map((file, index) => (
            <div key={index} className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span className="truncate">{file.name}</span>
                <div className="flex items-center gap-2">
                  <span>{file.progress}%</span>
                  <Button className="h-6 w-6" onClick={() => cancelUpload(file.name)}>
                    <X className="h-3 w-3" />
                    <span className="sr-only">Cancel</span>
                  </Button>
                </div>
              </div>
              <Progress value={file.progress} className="h-2" />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}