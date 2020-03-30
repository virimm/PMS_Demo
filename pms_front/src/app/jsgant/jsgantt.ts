import {
	showToolTip, addTooltipListeners, addThisRowListeners, addFormatListeners,
	folder, hide, show,
	addScrollListeners, addFolderListeners, addListener
} from "./events";
import {
	findObj, changeFormat,
	stripIds, stripUnwanted, delayedHide, getOffset,
	getScrollPositions, isIE, benchMark, getZoomFactor, hideToolTip, fadeToolTip, criticalPath, updateFlyingObj, moveToolTip,
} from "./utils/general_utils";
import { parseXML, parseXMLString, findXMLNode, getXMLNodeValue, AddXMLTask } from './xml';
import { taskLink, sortTasks, TaskItem, processRows } from "./task";
import { GanttChart } from "./draw";
import { parseJSON, parseJSONString, addJSONTask } from "./json";
import { getMinDate, getMaxDate, parseDateStr, formatDateStr, parseDateFormatStr, getIsoWeek } from "./utils/date_utils";

export let JSGantt; if (!JSGantt) JSGantt = {};

JSGantt.isIE = isIE;
JSGantt.TaskItem = TaskItem;
JSGantt.GanttChart = GanttChart;
JSGantt.updateFlyingObj = updateFlyingObj;
JSGantt.showToolTip = showToolTip;

JSGantt.stripIds = stripIds;
JSGantt.stripUnwanted = stripUnwanted;
JSGantt.delayedHide = delayedHide;

JSGantt.hideToolTip = hideToolTip;
JSGantt.fadeToolTip = fadeToolTip;
JSGantt.moveToolTip = moveToolTip;

JSGantt.getZoomFactor = getZoomFactor;

JSGantt.getOffset = getOffset;
JSGantt.getScrollPositions = getScrollPositions;
JSGantt.processRows = processRows;
JSGantt.sortTasks = sortTasks;

// Used to determine the minimum date of all tasks and set lower bound based on format
JSGantt.getMinDate = getMinDate;

// Used to determine the maximum date of all tasks and set upper bound based on format
JSGantt.getMaxDate = getMaxDate;

// This function finds the document id of the specified object
JSGantt.findObj = findObj;

JSGantt.changeFormat = changeFormat;

// Tasks
JSGantt.folder = folder;
JSGantt.hide = hide;
JSGantt.show = show;
JSGantt.taskLink = taskLink;

JSGantt.parseDateStr = parseDateStr;
JSGantt.formatDateStr = formatDateStr;
JSGantt.parseDateFormatStr = parseDateFormatStr;

// XML 
JSGantt.parseXML = parseXML;
JSGantt.parseXMLString = parseXMLString;
JSGantt.findXMLNode = findXMLNode;
JSGantt.getXMLNodeValue = getXMLNodeValue;
JSGantt.AddXMLTask = AddXMLTask;

// JSON
JSGantt.parseJSON = parseJSON;
JSGantt.parseJSONString = parseJSONString;
JSGantt.addJSONTask = addJSONTask;

JSGantt.benchMark = benchMark;
JSGantt.getIsoWeek = getIsoWeek;

JSGantt.addListener = addListener;
JSGantt.addTooltipListeners = addTooltipListeners;
JSGantt.addThisRowListeners = addThisRowListeners;
JSGantt.addFolderListeners = addFolderListeners;
JSGantt.addFormatListeners = addFormatListeners;
JSGantt.addScrollListeners = addScrollListeners;

JSGantt.criticalPath = criticalPath;