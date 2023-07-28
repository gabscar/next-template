import styled, { css } from 'styled-components';
import { DeviceStatus } from '@/domain';

export interface TableComponentDataProps {
  flex: number;
  alignment?: keyof typeof alignOptions;
  status?: string;
}

export interface TableComponentInteractiveRowProps {
  isInteracting?: boolean;
  cursorPointer?: boolean;
}
export interface ITableRowParams {
  backgroundColor?: string;
}
const alignOptions = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

export const TableComponentContainer = styled.table`
  width: 100%;
  background-color: white;
  border-collapse: collapse;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  overflow: hidden;
  box-shadow: 2px 4px 10px -3px rgb(0 0 0 / 10%);
`;

export const TableComponentBody = styled.tbody`
  tr {
    position: relative;
    ::before {
      content: '';
      position: absolute;
      z-index: 1;
      left: -30px;
      top: -4px;
      width: calc(100% + 35px);
      height: 2px;
      background-color: white;
    }
  }
`;

export const TableComponentHead = styled.thead`
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const TableComponentRow = styled.tr<ITableRowParams>`
  ${({ theme, backgroundColor }) => css`
    width: 100%;
    display: flex;
    padding-left: 30px;
    padding: 1.5rem;
    justify-content: space-between;

    ${backgroundColor &&
    css`
      background-color: ${backgroundColor};
    `}
  `}
`;

export const TableComponentData = styled.td<TableComponentDataProps>`
  ${({ theme, flex, alignment, status }) => css`
    flex: ${flex};
    align-items: center;
    padding: 5px ${alignment === 'center' ? '0px' : '10px'} 5px 0px;
    width: 100%;
    font-size: ${theme.font.sizes.xxsmall};
    color: ${status === DeviceStatus.ACTIVE
      ? theme.colors.success
      : status === DeviceStatus.INACTIVE
      ? theme.colors.error
      : theme.colors.primaryLabelColor};
    ${alignment &&
    css`
      display: flex;
      justify-content: ${alignOptions[alignment || 'start']};
    `}
  `}
`;

export const TableComponentInteractiveData = styled(TableComponentData)``;

export const TableComponentHeadCell = styled.th<TableComponentDataProps>`
  ${({ theme, flex, alignment }) => css`
    flex: ${flex};
    width: 100%;
    display: flex;
    justify-content: flex-start;
    color: ${theme.colors.primaryLabelColor};
    font-size: ${theme.font.sizes.xsmall};

    ${alignment &&
    css`
      display: flex;
      justify-content: ${alignOptions[alignment || 'start']};
    `}
  `}
`;
export const TableWrapper = styled.div<{ minWidth?: number }>`
  ${({ theme, minWidth }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow: auto;
    border: 1px solid ${theme.colors.menuBorderColor};
    border-radius: 8px;
    min-width: ${minWidth}px;
  `}
`;
export const ListTableContainer = styled.div`
  ${() => css`
    width: 100%;
    position: relative;
    > table {
      min-width: 1000px;
    }
    background-color: #f9fafa;
    overflow-x: auto;

    > span {
      display: flex;
      justify-content: center;
      font-weight: bold;
    }

    @media (max-width: 400px) {
      .MuiTablePagination-actions {
        margin-left: 0px;
      }
    }

    &&::-webkit-scrollbar {
      width: 2px;
      height: 0.5rem;
      appearance: none;
    }
    &&::-webkit-scrollbar-track {
      background: #0000000e;
    }
    &&::-webkit-scrollbar-thumb {
      background-color: #c6c6c658;
      border-radius: 20px;
    }
    &&::-webkit-scrollbar-thumb:hover {
      background-color: #c6c6c691;
      cursor: pointer;
    }
  `}
`;

interface IScrollArrow {
  right: number;
}

export const ScrollArrow = styled.div<IScrollArrow>`
  position: absolute;
  bottom: 5px;
  right: ${({ right }) => right}px;
`;
