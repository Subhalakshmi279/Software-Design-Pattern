import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import BlurFade from '../magicui/blur-fade';
import { Edit, Trash } from 'lucide-react';

const UserSub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [subjects, setSubjects] = useState([
    { subjectCode: "SUB001", subject: "Mathematics", staff: "Dr. John Doe", department: "Science" },
    { subjectCode: "SUB002", subject: "Physics", staff: "Prof. Jane Smith", department: "Science" },
    { subjectCode: "SUB003", subject: "Chemistry", staff: "Dr. Emily White", department: "Science" },
    { subjectCode: "SUB004", subject: "History", staff: "Mr. Robert Brown", department: "Arts" },
    { subjectCode: "SUB005", subject: "Literature", staff: "Dr. Mary Johnson", department: "Arts" },
    { subjectCode: "SUB006", subject: "Biology", staff: "Dr. Alan Taylor", department: "Science" },
    { subjectCode: "SUB007", subject: "Philosophy", staff: "Prof. Susan Clark", department: "Arts" },
  ]);
  const [editingSubject, setEditingSubject] = useState(null);
  const [newSubject, setNewSubject] = useState({ subjectCode: '', subject: '', staff: '', department: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = (subjectCode) => {
    if (window.confirm('Are you sure you want to delete this subject?')) {
      setSubjects(subjects.filter(subject => subject.subjectCode !== subjectCode));
    }
  };

  const handleEdit = (subject) => {
    setEditingSubject(subject);
    setIsEditing(true);
    setNewSubject(subject); // Populate form with the subject details
  };

  const handleAdd = () => {
    setEditingSubject(null);
    setIsEditing(false);
    setNewSubject({ subjectCode: '', subject: '', staff: '', department: '' });
  };

  const handleSaveChanges = () => {
    if (isEditing) {
      setSubjects(subjects.map(subject => (subject.subjectCode === editingSubject.subjectCode ? newSubject : subject)));
    } else {
      setSubjects([...subjects, newSubject]);
    }
    setEditingSubject(null);
    setIsEditing(false);
    setNewSubject({ subjectCode: '', subject: '', staff: '', department: '' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewSubject({ ...newSubject, [id]: value });
  };

  const filteredSubjects = subjects.filter((subject) =>
    subject.subjectCode.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.staff.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='m-1 p-4 h-full w-full'>
      <BlurFade delay={0.25} inView>
        <Card className='bg-opacity-90 backdrop-blur-3xl h-full w-full justify-start flex flex-col items-start'>
          <CardHeader className='w-full flex flex-row justify-between items-center border'>
            <CardTitle>Subjects</CardTitle>
            <div className='flex flex-row gap-2'>
              <Input
                type='text'
                placeholder='Search...'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className='w-64'
              />
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" onClick={handleAdd}>ADD</Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>{isEditing ? "Edit Subject" : "Add Subject"}</SheetTitle>
                    <SheetDescription>{isEditing ? "Edit the subject details here. Click save when you're done." : "Add a new subject here. Click save when you're done."}</SheetDescription>
                  </SheetHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="subjectCode" className="text-right">Code</Label>
                      <Input id="subjectCode" value={newSubject.subjectCode} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="subject" className="text-right">Subject</Label>
                      <Input id="subject" value={newSubject.subject} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="staff" className="text-right">Staff</Label>
                      <Input id="staff" value={newSubject.staff} onChange={handleInputChange} className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="department" className="text-right">Department</Label>
                      <Input id="department" value={newSubject.department} onChange={handleInputChange} className="col-span-3" />
                    </div>
                  </div>
                  <SheetFooter>
                    <SheetClose asChild>
                      <Button type="submit" onClick={handleSaveChanges}>Save changes</Button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </CardHeader>
          <Table>
            <TableCaption>A list of your recent subjects.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Code</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Staff</TableHead>
                <TableHead>Department</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredSubjects.map((subject) => (
                <TableRow key={subject.subjectCode}>
                  <TableCell className="font-medium">{subject.subjectCode}</TableCell>
                  <TableCell>{subject.subject}</TableCell>
                  <TableCell>{subject.staff}</TableCell>
                  <TableCell>{subject.department}</TableCell>
                  <TableCell className="text-right">
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" className="mr-2" onClick={() => handleEdit(subject)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>Edit Subject</SheetTitle>
                          <SheetDescription>Edit the subject details here. Click save when you're done.</SheetDescription>
                        </SheetHeader>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="subjectCode" className="text-right">Code</Label>
                            <Input id="subjectCode" value={newSubject.subjectCode} onChange={handleInputChange} className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="subject" className="text-right">Subject</Label>
                            <Input id="subject" value={newSubject.subject} onChange={handleInputChange} className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="staff" className="text-right">Staff</Label>
                            <Input id="staff" value={newSubject.staff} onChange={handleInputChange} className="col-span-3" />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="department" className="text-right">Department</Label>
                            <Input id="department" value={newSubject.department} onChange={handleInputChange} className="col-span-3" />
                          </div>
                        </div>
                        <SheetFooter>
                          <SheetClose asChild>
                            <Button type="submit" onClick={handleSaveChanges}>Save changes</Button>
                          </SheetClose>
                        </SheetFooter>
                      </SheetContent>
                    </Sheet>
                    <Button variant="outline" onClick={() => handleDelete(subject.subjectCode)}>
                      <Trash className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      </BlurFade>
    </div>
  );
};

export default UserSub;
