import { forwardRef } from 'react'
import type { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from 'react'

/* ── Table ─────────────────────────────────────────────────────── */

export interface TableProps extends HTMLAttributes<HTMLTableElement> {}

const TableRoot = forwardRef<HTMLTableElement, TableProps>(function Table(
  { className, ...rest },
  ref,
) {
  return (
    <div className="cd-table-wrapper">
      <table
        ref={ref}
        className={`cd-table ${className ?? ''}`.trim()}
        {...rest}
      />
    </div>
  )
})

/* ── Header ────────────────────────────────────────────────────── */

export interface TableHeaderProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableHeader = forwardRef<HTMLTableSectionElement, TableHeaderProps>(function TableHeader(
  { className, ...rest },
  ref,
) {
  return (
    <thead
      ref={ref}
      className={`cd-table-header ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Body ──────────────────────────────────────────────────────── */

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(function TableBody(
  { className, ...rest },
  ref,
) {
  return (
    <tbody
      ref={ref}
      className={`cd-table-body ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Footer ────────────────────────────────────────────────────── */

export interface TableFooterProps extends HTMLAttributes<HTMLTableSectionElement> {}

const TableFooter = forwardRef<HTMLTableSectionElement, TableFooterProps>(function TableFooter(
  { className, ...rest },
  ref,
) {
  return (
    <tfoot
      ref={ref}
      className={`cd-table-footer ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Row ───────────────────────────────────────────────────────── */

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(function TableRow(
  { className, ...rest },
  ref,
) {
  return (
    <tr
      ref={ref}
      className={`cd-table-row ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Head (th) ─────────────────────────────────────────────────── */

export interface TableHeadProps extends ThHTMLAttributes<HTMLTableCellElement> {}

const TableHead = forwardRef<HTMLTableCellElement, TableHeadProps>(function TableHead(
  { className, ...rest },
  ref,
) {
  return (
    <th
      ref={ref}
      className={`cd-table-head ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Cell (td) ─────────────────────────────────────────────────── */

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(function TableCell(
  { className, ...rest },
  ref,
) {
  return (
    <td
      ref={ref}
      className={`cd-table-cell ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Caption ───────────────────────────────────────────────────── */

export interface TableCaptionProps extends HTMLAttributes<HTMLTableCaptionElement> {}

const TableCaption = forwardRef<HTMLTableCaptionElement, TableCaptionProps>(function TableCaption(
  { className, ...rest },
  ref,
) {
  return (
    <caption
      ref={ref}
      className={`cd-table-caption ${className ?? ''}`.trim()}
      {...rest}
    />
  )
})

/* ── Compound export ───────────────────────────────────────────── */

export const Table = Object.assign(TableRoot, {
  Header: TableHeader,
  Body: TableBody,
  Footer: TableFooter,
  Row: TableRow,
  Head: TableHead,
  Cell: TableCell,
  Caption: TableCaption,
})
