import { Injectable } from '@nestjs/common';
import { FormService } from 'src/form/form.service';

@Injectable()
export class ReportService {

    constructor(
        private formService: FormService
    ) { }

}
