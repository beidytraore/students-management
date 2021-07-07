import { Component, OnInit } from '@angular/core';
import {Notice} from '../../model/notice.model';

@Component({
  selector: 'app-notice-board',
  templateUrl: './notice-board.component.html',
  styleUrls: ['./notice-board.component.scss']
})
export class NoticeBoardComponent implements OnInit {

  constructor() { }
  Notice: Notice = {
    id: 101,
    date: "11.02.2021",
    title: "Freedom of speech",
    shortexplanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class apnt taciti sociosqu ad litora torquen per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus utvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiatfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metusnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.",
    fullexplanation: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class apnt taciti sociosqu ad litora torquen per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus utvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiatfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metusnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class apnt taciti sociosqu ad litora torquen per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus utvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiatfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metusnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum eget. Class apnt taciti sociosqu ad litora torquen per conubia nostra, per inceptos himenaeos. Duis pharetra luctus lacus utvestibulum. Maecenas ipsum lacus, lacinia quis posuere ut, pulvinar vitae dolor.Integer eu nibh at nisi ullamcorper sagittis id vel leo. Integer feugiatfaucibus libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit convallis Cras pharetra mi tristique sapien vestibulum lobortis. Nam eget bibendum metusnon dictum mauris. Nulla at tellus sagittis, viverra est a, bibendum metus. vestibulum lobortis. Nam eget bibendum metusnon dictum mauris. Nulla at tellus sagittis"
  }
  Notices: Notice[] = [this.Notice, this.Notice, this.Notice, this.Notice]

  ngOnInit(): void {
  }

}
