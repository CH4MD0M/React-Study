import React, { useCallback, useContext } from "react";
import {
    CLICK_MINE,
    CODE,
    FLAG_CELL,
    NORMALIZE_CELL,
    OPEN_CELL,
    QUESTION_CELL,
    TableContext,
} from "./MineSearch";

// cell의 스타일
const getTdStyle = (code) => {
    switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
            return {
                background: "#444",
            };

        case CODE.OPENED:
        case CODE.CLICKED_MINE:
            return {
                background: "#fff",
            };

        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return { background: "red" };

        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return { background: "yellow" };

        default:
            return {
                background: "#fff",
            };
    }
};

// cell의 텍스트
const getTdText = (code) => {
    switch (code) {
        case CODE.NORMAL:
            return "";

        case CODE.MINE:
            return "X";

        case CODE.CLICKED_MINE:
            return "펑";

        case CODE.FLAG:
        case CODE.FLAG_MINE:
            return "!";

        case CODE.QUESTION:
        case CODE.QUESTION_MINE:
            return "?";

        default:
            return "";
    }
};

const Td = ({ rowIndex, cellIndex }) => {
    const { tableData, halted, dispatch } = useContext(TableContext);

    const onClickTd = useCallback(() => {
        if (halted) {
            return;
        }
        switch (tableData[rowIndex][cellIndex]) {
            case CODE.OPENED:
            case CODE.FLAG:
            case CODE.FLAG_MINE:
            case CODE.QUESTION:
            case CODE.QUESTION_MINE:
                return;

            case CODE.NORMAL:
                dispatch({ type: OPEN_CELL, row: rowIndex, cell: cellIndex });
                return;

            case CODE.MINE:
                dispatch({ type: CLICK_MINE, row: rowIndex, cell: cellIndex });
                return;
        }
    }, [tableData[rowIndex][cellIndex], halted]);

    // 우클릭 했을 때
    const onRightClickTd = useCallback(
        (e) => {
            e.preventDefault();
            if (halted) {
                return;
            }

            switch (tableData[rowIndex][cellIndex]) {
                case CODE.NORMAL:
                case CODE.MINE:
                    dispatch({
                        type: FLAG_CELL,
                        row: rowIndex,
                        cell: cellIndex,
                    });
                    return;

                case CODE.FLAG:
                case CODE.FLAG_MINE:
                    dispatch({
                        type: QUESTION_CELL,
                        row: rowIndex,
                        cell: cellIndex,
                    });
                    return;

                case CODE.QUESTION:
                case CODE.QUESTION_MINE:
                    dispatch({
                        type: NORMALIZE_CELL,
                        row: rowIndex,
                        cell: cellIndex,
                    });
                    return;

                default:
                    return;
            }
        },
        [tableData[rowIndex][cellIndex], halted]
    );

    return (
        <td
            style={getTdStyle(tableData[rowIndex][cellIndex])}
            onClick={onClickTd}
            onContextMenu={onRightClickTd}
        >
            {getTdText(tableData[rowIndex][cellIndex])}
        </td>
    );
};

export default Td;
