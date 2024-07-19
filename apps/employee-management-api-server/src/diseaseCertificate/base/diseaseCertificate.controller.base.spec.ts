import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { DiseaseCertificateController } from "../diseaseCertificate.controller";
import { DiseaseCertificateService } from "../diseaseCertificate.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  expiryDate: new Date(),
  issueDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  expiryDate: new Date(),
  issueDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    expiryDate: new Date(),
    issueDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  expiryDate: new Date(),
  issueDate: new Date(),
};

const service = {
  createDiseaseCertificate() {
    return CREATE_RESULT;
  },
  diseaseCertificates: () => FIND_MANY_RESULT,
  diseaseCertificate: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("DiseaseCertificate", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: DiseaseCertificateService,
          useValue: service,
        },
      ],
      controllers: [DiseaseCertificateController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /diseaseCertificates", async () => {
    await request(app.getHttpServer())
      .post("/diseaseCertificates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        issueDate: CREATE_RESULT.issueDate.toISOString(),
      });
  });

  test("GET /diseaseCertificates", async () => {
    await request(app.getHttpServer())
      .get("/diseaseCertificates")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          expiryDate: FIND_MANY_RESULT[0].expiryDate.toISOString(),
          issueDate: FIND_MANY_RESULT[0].issueDate.toISOString(),
        },
      ]);
  });

  test("GET /diseaseCertificates/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/diseaseCertificates"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /diseaseCertificates/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/diseaseCertificates"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        expiryDate: FIND_ONE_RESULT.expiryDate.toISOString(),
        issueDate: FIND_ONE_RESULT.issueDate.toISOString(),
      });
  });

  test("POST /diseaseCertificates existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/diseaseCertificates")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        expiryDate: CREATE_RESULT.expiryDate.toISOString(),
        issueDate: CREATE_RESULT.issueDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/diseaseCertificates")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
