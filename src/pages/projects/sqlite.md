---
layout: ../../layouts/ProjectLayout.astro
title: SQLite Clone
description: SQLite clone built with Go's awesome concurrency model.
tags: ["Go", "SQLite", "Concurrency", "B-Trees"]
githubUrl: https://github.com/rudrowo/codecrafters-sqlite
timestamp: 2024-11-24T02:39:03+00:00
featured: false
filename: sqlite
---

SQLite clone built with Go's awesome concurrency model.

## Features Implemented

- Print page size, number of tables and table names
- Count rows in a table
- Read data from a single column
- Read data from multiple columns
- Filter data with a WHERE clause
- Retrieve data using a full-table scan
- Scan database concurrently, resulting in high performance

## Architecture

![Architecture](/sqlite_arch.svg)

Each page on disk is deserialized and printed as soon as they are read, resulting in lower query time
