# Database Image URL Maintenance Guide

This document outlines the standard operating procedures for verifying and maintaining image URLs in the `fotos_de_autos` table within Supabase.

## Common Issues Identified
1. **Incomplete URLs:** URLs missing file extensions (e.g., `.webp`, `.jpg`, `.png`).
2. **Comma-Separated Lists:** Multiple URLs stored as a plain comma-separated string instead of a JSON array, causing parsing errors in strict components.
3. **Mismatched Filenames:** Case sensitivity issues or incorrect spacing (e.g., `%20` vs spaces) in the storage path.

## Verification Query
To audit current broken URLs, run the following SQL query in your Supabase SQL Editor: